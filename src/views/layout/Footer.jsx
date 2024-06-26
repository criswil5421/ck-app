import {Box, Container, Grid, Typography} from "@mui/material";

const contentFooter=[
	{
		title: "Para ti",
		content: "Gracias por toda la felicidad que me brindas, gracias por el cariño que me das cada dia, gracias por todo le amor que me demuestrar cada dia te amo demasiado, y nada ni nadie va a cambiar ese sentimiento, sigamos juntos mucho tiempo mas"
	},
    {
		title: "Info de la pagina",
		content: "Esta pagina se ira actualizando ya que esta es la primera version, aqui se ira contando el tiempo que estemos juntos, espero que te guste ya que se hizo con mucho amor"
	}
];

const Footer=() => {

	return (
		<Box sx={{backgroundColor: "black"}}>
			<Container maxWidth="lg" >
				<Grid container spacing={2} pt={1.1} >
					<Grid item xs={12} md={9}> 
						{contentFooter.map((data)=>(
							<Box key={data.title} >
								<Typography variant="h5" color="primary"  sx={{ fontSize: { xs: "0.8rem", md: "1.48rem" } }}>
								{data.title}
								</Typography>
								<Typography variant="p" color="white" sx={{ fontSize: { xs: "0.5rem", md: "1rem" } }}>
									{data.content}
								</Typography>
							</Box>
						))}
						
					</Grid>
					<Grid item xs={12} md={3} sx={{display: "flex", alignItems:"center",  justifyContent: { xs: "center", md: "flex-end" }}}> 
						{/* <Logo src="/logo letras blancas.png" /> */}
                        <Typography variant="h2" color="white" sx={{ fontSize: { xs: "3rem", md: "4rem" } }} >
									CK
						</Typography>
                        <Typography variant="h7" color="white" sx={{ fontSize: { xs: "1rem", md: "1rem" } }} >
									v1
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default Footer;
