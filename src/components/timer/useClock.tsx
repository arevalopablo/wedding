import { useEffect, useState } from "react";
import type { Time, TimeValues } from "./interfaces";

const useClock = () => {
  const [time, setTime] = useState<Time>({
    segundos: 0,
    minutos: 0,
    horas: 0,
    dias: 0,
  });

  const [finish, setFinish] = useState<boolean>(false)

  const getTime = () => {
    const currentDate = new Date();
    const wedding = new Date(2025, 8, 12, 18, 0, 0);
    const remain = wedding.getTime() - currentDate.getTime();

    let segundos: TimeValues = Math.floor(remain / 1000);
    let minutos: TimeValues = Math.floor(segundos / 60);
    let horas: TimeValues = Math.floor(minutos / 60);
    let dias: TimeValues = Math.floor(horas / 24);

    segundos = segundos % 60;
    minutos = minutos % 60;
    horas = horas % 24;

    // segundos < 10 && (segundos = `0${segundos}`);
    // minutos < 10 && (minutos = `0${minutos}`);
    // horas < 10 && (horas = `0${horas}`);
    // console.log({segundos, minutos, horas, dias})

    if (remain <= 0) {
      setFinish(true)
    }

    setTime({
      segundos,
      minutos,
      horas,
      dias,
    });
  };

  useEffect(() => {
    if (!finish) {
      setInterval(() => {
        getTime();
      }, 1000);
    }
  }, [finish]);

  return {
    getTime,
    time,
    finish
  };
};

export default useClock;
