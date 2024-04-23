import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Box,Stack} from "@mui/material";
import { Home } from "../home";

const MainContent = () => (
	<Stack spacing={2} >
			<Routes>
				<Route path="/ck-app/build" element={<Home />} />
			</Routes>
		
	</Stack>
);

const MainLayout = () => (
	<Router>
		<Box >
			{/* <Header /> */}
			<MainContent />
			{/* <Footer /> */}
		</Box>
	</Router>
);

export default MainLayout;
