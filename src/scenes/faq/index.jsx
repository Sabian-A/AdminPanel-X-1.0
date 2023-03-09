import {Box, useTheme, Typography} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const FAQ =()=>{
    const theme =useTheme();
    const colors = tokens(theme.palette.mode);

    return(

        <Box m="20px">
            <Header title = "FAQ" subtitle ="Frequently asked questions" />


            <Accordion defaultExpanded>
                <AccordionSummary expandIcon ={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        An important questtion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla ad ex ea id mollit do ipsum ex amet eiusmod. Ea nulla ad excepteur laboris 
                        veniam voluptate aute aute est velit esse. Ipsum laboris consequat deserunt fugiat. 
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion defaultExpanded>
                <AccordionSummary expandIcon ={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        Another important questtion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla ad ex ea id mollit do ipsum ex amet eiusmod. Ea nulla ad excepteur laboris 
                        veniam voluptate aute aute est velit esse. Ipsum laboris consequat deserunt fugiat. 
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion defaultExpanded>
                <AccordionSummary expandIcon ={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        Nice questtion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla ad ex ea id mollit do ipsum ex amet eiusmod. Ea nulla ad excepteur laboris 
                        veniam voluptate aute aute est velit esse. Ipsum laboris consequat deserunt fugiat. 
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion defaultExpanded>
                <AccordionSummary expandIcon ={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        A  questtion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla ad ex ea id mollit do ipsum ex amet eiusmod. Ea nulla ad excepteur laboris 
                        veniam voluptate aute aute est velit esse. Ipsum laboris consequat deserunt fugiat. 
                    </Typography>
                </AccordionDetails>
            </Accordion>


            <Accordion defaultExpanded>
                <AccordionSummary expandIcon ={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        The questtion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla ad ex ea id mollit do ipsum ex amet eiusmod. Ea nulla ad excepteur laboris 
                        veniam voluptate aute aute est velit esse. Ipsum laboris consequat deserunt fugiat. 
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon ={<ExpandMoreIcon/>}>
                    <Typography color={colors.greenAccent[500]} variant ="h5">
                        Final questtion
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Nulla ad ex ea id mollit do ipsum ex amet eiusmod. Ea nulla ad excepteur laboris 
                        veniam voluptate aute aute est velit esse. Ipsum laboris consequat deserunt fugiat. 
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )



}
 
export default FAQ;