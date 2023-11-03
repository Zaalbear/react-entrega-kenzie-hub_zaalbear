import { createContext, useContext, useState } from "react";
import { PageContext } from "./PageContext";
import { kenzieHubAPI } from "../components/services";

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
    const { techList, setTechList } = useContext(PageContext)
    const token = localStorage.getItem("@user_token")
    console.log(techList)

    const createTech = async (formData) => {
        try {
            const { data } = await kenzieHubAPI.post("/users/techs", formData, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTech = async (deletingId) => {
        try {
            const { data } = await kenzieHubAPI.delete(`/users/techs/${deletingId}`, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <TechContext.Provider value={{ createTech, deleteTech }}>
            { children }
        </TechContext.Provider>
    )
  
}