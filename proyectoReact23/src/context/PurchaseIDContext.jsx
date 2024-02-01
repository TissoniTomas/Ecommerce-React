import { createContext, useState } from "react";

export const PurchaseIdContext = createContext();

export const PurchaseIDProvider = ({children})=>{
    const [purchaseId, setPurchaseID] = useState(0);
    return(
        <PurchaseIdContext.Provider value={[purchaseId, setPurchaseID]}>
            {children}
        </PurchaseIdContext.Provider>
    )


}