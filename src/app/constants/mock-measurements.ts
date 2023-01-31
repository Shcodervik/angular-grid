import { Measurement } from "@measurement/measurement";

export const MEASUREMENTS: Measurement[] = [
  {
    id: 1,
    date: "30.07.2022",
    time: "10:08:44",
    source: "Оператор",
    phase: "-",
  },
  {
    id: 2,
    date: "29.07.2022",
    time: "15:08:44",
    source: "Оператор",
    phase: "a",
    voltage: 1,
    amperage: 0.5,
    truePower: 3,
    reactivePower: 0.7,
    cos: 0.67,
    checked: "Михин Павел Михайлович",
  },
  {
    id: 3,
    date: "12.06.2022",
    time: "10:28:02",
    source: "SCADA",
    phase: "b",
    voltage: 1,
    amperage: 0.6,
    truePower: 2.756,
    reactivePower: 0.9,
    cos: 0.83,
    checked: "Иванов Иван Иванович"
  },
  {
    id: 4,
    date: "05.05.2022",
    time: "13:56:39",
    source: "АСКУЭ",
    phase: "c",
    voltage: 1.2,
    amperage: 0.5,
    truePower: 3.143,
    reactivePower: 0.78,
    cos: 0.67,
    checked: "Сидоров Геннадий Петрович"
  },
  {
    id: 5,
    date: "02.03.2022",
    time: "17:43:51",
    source: "Регистратор",
    phase: "ab",
    voltage: 1.1,
    amperage: 0.4,
    truePower: 3.343,
    reactivePower: 0.76,
    cos: 0.65,
    checked: "Сидоров Геннадий Петрович"
  },
]
