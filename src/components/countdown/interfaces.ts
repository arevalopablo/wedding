type Time = {
  // seconds: number | string;
  segundos: TimeValues;
  minutos: TimeValues;
  horas: TimeValues;
  dias: TimeValues;
};

type TimeValues = number | string;


export type { Time, TimeValues };
