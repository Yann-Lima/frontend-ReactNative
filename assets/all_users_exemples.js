const getRandomNumber = (min, max)=>{
    return Math.floor(Math.random()*(max - min + 1)) + min;
};
import p1_img from "./post_1.jpg";
import p2_img from "./post_2.jpg";
import p3_img from "./post_3.jpg";
import p4_img from "./post_4.jpg";
import p5_img from "./post_5.jpg";
import p6_img from "./post_6.jpg";
import p7_img from "./post_7.jpg";
import p8_img from "./post_8.jpg";
import p9_img from "./post_9.jpg";
import p10_img from "./post_10.jpg";
import p11_img from "./post_11.jpg";
import c_1 from "./carrossel_1.jpg";
import c_2 from "./carrossel_2.jpg";
import c_3 from "./carrossel_3.jpg";
import boy_p from "./boy_profile.jpg";
/*import man_p from "./man_profile.jpg";
import man_p2 from "./man_profile2.jpg";
import woman_p from "./woman_profile.jpg";*/

let all_users_exemples = [
    {
        id: 1,
        name: "Post publicated",
        like: getRandomNumber(1, 1000), // Gera um número aleatório de 1 a 1000 para os likes
        comentarios: getRandomNumber(0, 100), // Gera um número aleatório de 0 a 100 para os comentários
        image: p1_img,
    },
    {
        id: 2,
        name: "Post publicated",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        image: p2_img,
    },
    {
        id: 3,
        name: "Post publicated",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        image: p3_img,
    },
    {
        id: 4,
        name: "Post publicated",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        image: p4_img,
    },
    {
        id: 5,
        name: "Post publicated",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        image: p5_img,
    },
    {
        id: 6,
        name: "Post publicated",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        image: p6_img,
    },
    {
        id: 7,
        name: "Post publicated",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        image: p7_img,
    },
    {
        id: 8,
        name: "Post publicated",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        image: p8_img,
    },
    {
        id: 9,
        name: "Post publicated",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        image: p9_img,
    },
    {
        id: 10,
        name: "Post publicated",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        image: p10_img,
    },
    {
        id: 11,
        name: "Post publicated",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        image: p11_img,
    },

    //Para o carrossel TESTAR POIS NUNCA FIZ ANTES 
    {
        id: 12,
        name: "Post carrossel",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        image: [c_1, c_2, c_3],
    }
];


export default all_users_exemples;