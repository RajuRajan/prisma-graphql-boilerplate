const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
module.exports = {
    users: async ()=>{
        const res = await prisma.user.findMany({
            include: { 
              profile: true 
            },
          })
        return [...res]
    },
    createUser: async (args) => {
        try{
            const hashedPass = await bcrypt.hash(args.userInput.password ,12);
            const res = await prisma.user.create({
                data: {
                email: args.userInput.email,
                password: hashedPass,
                profile: {
                    create: { bio:  "I like turtles" }
                  }
                }
            })
            return {...res}
        } catch (err){
            throw err;
        }
    },
    login: async ({email,password}) => {
        try{
            const user = await prisma.user.findOne({where:{email}})
            if(!user){
                throw new Error("User Not Found")
            }
            const isEqual = await bcrypt.compare(password, user.password)
            // const isEqual = password.localeCompare(user.password)
            if(!isEqual){
                throw new Error("Password Incorrect")
            }
            const token = jwt.sign({userId: user.id, email: user.email}, 'secret',{
                expiresIn: "1h"
            })
            return {id: user.id, token, tokenExpiration: 1}

        } catch (err){
            throw err;
        }

    }
}