import ContinentsHeader from "../ui/svg/ContinentsHeader";
import ForumHeader from "../ui/svg/ForumHeader";
import QuizHeader from "../ui/svg/QuizHeader";

export const data = [
  {
    id: 1,
    header: <ContinentsHeader />,
    text1:
      "Doskonały sposób na naukę fascynujących ciekawostek o kontynentach i ich unikalnych cechach.",
    img: require("../assets/africa.1024x977.png"),
    text2:
      "Poznawanie tych informacji będzie nie tylko edukacyjne, ale także inspirujące, zachęcając Cię do odkrywania różnorodności naszej planety!",
  },
  {
    id: 2,
    header: <QuizHeader />,
    text1:
      "Zapraszamy do rozpoczęcia przygody z naszymi quizami, gdzie możesz stawić czoła wyzwaniom związanymi krajami",
    img: require("../assets/quizIcon.png"),
    text2:
      "Wybierz kategorię, którą chcesz zgłębić, i pokaż, jak dobrze znasz świat! Czy jesteś gotowy na to wyzwanie?",
  },
  {
    id: 3,
    header: <ForumHeader />,
    text1:
      "Nasze forum to miejsce, gdzie pasjonaci i eksperci mogą ze sobą dzielić swoją wiedzą, doświadczeniem i pasją.",
    img: require("../assets/forum.png"),
    text2:
      "To platforma, która stwarza możliwość nawiązywania wartościowych interakcji, gdzie użytkownicy wspierają się nawzajem, odpowiadając na pytania i udzielając cennych wskazówek.",
  },
];
