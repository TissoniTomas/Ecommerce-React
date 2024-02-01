import { createContext, useState } from "react";

export const PurchaseInfoContext = createContext();

export const PurchaseInfoProvider = ({children})=>{
    const [purchaseInfo, setPurchaseInfo] = useState(0);
    const [purchaseID, setPurchaseID] = useState("")
    
    return(
        <PurchaseInfoContext.Provider value={{purchaseInfo, setPurchaseInfo, purchaseID, setPurchaseID}}>
            {children}
        </PurchaseInfoContext.Provider>
    )


}