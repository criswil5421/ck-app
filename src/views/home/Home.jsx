import React, { useState, useEffect } from 'react';
import { differenceInCalendarMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, parse, format, sub } from 'date-fns';
import { Grid, Stack, Typography } from '@mui/material';
import Carrusel from '../aniversario/Carrusel';

const Home = () => {
    const [tiempoTranscurrido, setTiempoTranscurrido] = useState('');

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
            }else{
              meses--;
                diasTranscurridos = differenceInDays(ahora, fecha23Anterior);
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
  height: "100vh",
  width: "100vw",
  backgroundColor: 'pink',
  backgroundImage: `radial-gradient(circle at 20% 30%, #ffff33 5%, transparent 5%), radial-gradient(circle at 75% 50%, #ffff33 5%, transparent 5%), radial-gradient(circle at 46% 60%, #ffff33 5%, transparent 5%)`,
  backgroundSize: '120px 120px',
  backgroundRepeat: 'no-repeat',
};
    return (
      <Grid container sx={chicasSuperpoderosasFondo} p={4}>
        <Grid item xs={12}>
          <Typography variant="h2" textAlign={"center"} sx={neonTextStyles}>
              Feliz Aniversario Mi Amor
          </Typography>
        </Grid>
        <Grid item xs={12} alignItems={"center"} display={"flex"} justifyContent={"center"}>
          <Carrusel />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" textAlign={"center"} sx={neonTextStyles}>
              {tiempoTranscurrido}
          </Typography>
        </Grid>
        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/CGQ6LkSKcKc?autoplay=1&loop=1&" 
          />
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/aBXoU73_WdU?autoplay=1&loop=1&" 
          />
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/dXXjsEduU0g?autoplay=1&loop=1&" 
          />
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/0a8XH1i_RNg?autoplay=1&loop=1&" 
          />
        </Grid>
      </Grid>
    );
}

export default Home;
