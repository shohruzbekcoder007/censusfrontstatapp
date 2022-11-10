import * as React from "react"
import TabsUnstyled from "@mui/base/TabsUnstyled"
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled"
import { Tab, TabsList } from "./styles"
import PublicLoginTel from "../PublicLoginTel";


export default function PublicLoginTabs() {
    return (
        <TabsUnstyled defaultValue={0}>
            <TabsList>
                <Tab>Telefon/Pochta</Tab>
                <Tab>ERI orqali</Tab>
            </TabsList>
            <TabPanelUnstyled value={0}>
                <PublicLoginTel/>
            </TabPanelUnstyled>
            <TabPanelUnstyled value={1}>ERI orqali</TabPanelUnstyled>
        </TabsUnstyled>
    );
}