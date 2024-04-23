import React, { useState, useEffect } from 'react';
import { differenceInCalendarMonths, differenceInDays, parse, format, sub } from 'date-fns';
import { Grid, Typography } from '@mui/material';
import Carrusel from '../aniversario/Carrusel';

const Home = () => {
    const [tiempoTranscurrido, setTiempoTranscurrido] = useState('');
    const [aniversario, setAniversario] = useState(false);

    useEffect(() => {
      const fechaEspecifica = parse('23-02-2024', 'dd-MM-yyyy', new Date());
        const intervalId = setInterval(() => {
            const ahora = new Date();
            let meses = differenceInCalendarMonths(ahora, fechaEspecifica);
            let diasTranscurridos;
            const fecha23 = parse(`${format(ahora, 'MM')}-${fechaEspecifica.getDate()}-${format(ahora, 'yyyy')}`, 'MM-dd-yyyy', new Date());
            const fecha23Anterior = sub(parse(`${format(ahora, 'MM')}-${fechaEspecifica.getDate()}-${format(ahora, 'yyyy')}`, 'MM-dd-yyyy', new Date()), { months: 1 });
            if (ahora.getDate() >=fechaEspecifica.getDate()) {   
                diasTranscurridos = differenceInDays(ahora, fecha23);
                if(ahora.getDate().toString() === fechaEspecifica.getDate().toString()){
                  setAniversario(true);
                }
            }else{
              meses--;
                diasTranscurridos = differenceInDays(ahora, fecha23Anterior);
                setAniversario(false);
            }
            const horas = ahora.getHours();
            const minutos = ahora.getMinutes();
            const segundos = ahora.getSeconds()

            let tiempoFormateado = `${meses} meses, `;
            
            if(diasTranscurridos && diasTranscurridos > 0){
              tiempoFormateado += `${diasTranscurridos} días, `
            }
            tiempoFormateado += `${horas} horas, ${minutos} minutos, ${segundos} segundos`;
            setTiempoTranscurrido(tiempoFormateado);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const neonTextStyles = {
      fontFamily: 'sans-serif',
      background: '-webkit-linear-gradient(45deg, rgba(255, 0, 0, 0.5), yellow)', // Ajusta el valor alfa aquí
      WebkitBackgroundClip: 'text',
      textShadow: '0 0 5px yellow, 0 0 5px yellow, 0 0 5px yellow', // Ajusta los valores de desenfoque
      fontWeight: 'bold'
  };

const chicasSuperpoderosasFondo = {
  backgroundColor: 'pink',
  backgroundImage: `radial-gradient(circle at 20% 30%, #ffff33 5%, transparent 5%), radial-gradient(circle at 75% 50%, #ffff33 5%, transparent 5%), radial-gradient(circle at 46% 60%, #ffff33 5%, transparent 5%)`,
  backgroundSize: '120px 120px',
  backgroundRepeat: 'no-repeat'
};
    return (
      <Grid container sx={chicasSuperpoderosasFondo} p={4} display={"flex"}>
        { aniversario && (
          <Grid item xs={12}>
            <Typography variant="h2" textAlign={"center"} sx={{ ...neonTextStyles, fontSize: { xs: '2rem', sm: '3rem' } }}>
                Feliz Aniversario Mi Amor
            </Typography>
          </Grid>)
        }  
        <Grid item xs={4} sm={4} alignItems={"center"} display={"flex"} justifyContent={"center"}>
            <Typography variant="h2" textAlign={"center"} sx={{ ...neonTextStyles, fontSize: { xs: '2rem', sm: '3rem' } }}>
                Tee
            </Typography>
        </Grid>
        <Grid item xs={4} sm={4} alignItems={"center"} display={"flex"} justifyContent={"center"}>
          <Carrusel />
        </Grid>
        <Grid item xs={4} sm={4} alignItems={"center"} display={"flex"} justifyContent={"center"}>
            <Typography variant="h2" textAlign={"center"} sx={{ ...neonTextStyles, fontSize: { xs: '2rem', sm: '3rem' } }}>
                Amooo
            </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h2" textAlign={"center"} sx={{ ...neonTextStyles, fontSize: { xs: '2rem', sm: '3rem' } }}>
              {tiempoTranscurrido}
          </Typography>
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"} height={"27.2vh"}>
            <iframe 
              width="25%" 
              height="100%" 
              src="https://www.youtube.com/embed/CGQ6LkSKcKc?autoplay=1&loop=1&" 
              title='CGQ6LkSKcKc'
            />
            <iframe 
              width="25%" 
              height="100%" 
              src="https://www.youtube.com/embed/aBXoU73_WdU?autoplay=1&loop=1&" 
              title='aBXoU73_WdU'
            />
            <iframe 
              width="25%" 
              height="100%" 
              src="https://www.youtube.com/embed/dXXjsEduU0g?autoplay=1&loop=1&"
              title='dXXjsEduU0g' 
            />
            <iframe 
              width="25%" 
              height="100%" 
              src="https://www.youtube.com/embed/0a8XH1i_RNg?autoplay=1&loop=1&" 
              title='0a8XH1i_RNgv'
            />
        </Grid>
      </Grid>
    );
}

export default Home;
