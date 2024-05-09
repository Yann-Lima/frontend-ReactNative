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
import profile_1 from "./profileImage1.png"
import profile_2 from "./profileImage2.png"
import profile_3 from "./profileImage3.png"
import profile_4 from "./profileImage4.png"
import profile_5 from "./profileImage5.png"
import profile_6 from "./profileImage6.png"
import profile_7 from "./profileImage7.png"
import profile_8 from "./profileImage8.png"
import profile_9 from "./profileImage9.png"
import profile_10 from "./profileImage10.png"
import profile_11 from "./profileImage11.png"
import profile_12 from "./profileImage12.png"
/*import man_p from "./man_profile.jpg";
import man_p2 from "./man_profile2.jpg";
import woman_p from "./woman_profile.jpg";*/

const all_users_exemples = [
    {
        id: 1,
        name: "Beatriz C.",
        like: getRandomNumber(1, 1000), // Gera um número aleatório de 1 a 1000 para os likes
        comentarios: getRandomNumber(0, 100), // Gera um número aleatório de 0 a 100 para os comentários
        imageProfile: profile_1,
        imagePost: p1_img,
    },
    {
        id: 2,
        name: "Ana Claudia",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        imageProfile: profile_2,
        imagePost: p2_img,
    },
    {
        id: 3,
        name: "Billy",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        imageProfile: profile_3,
        imagePost: p3_img,
    },
    {
        id: 4,
        name: "Jonas",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        imageProfile: profile_4,
        imagePost: p4_img,
    },
    {
        id: 5,
        name: "Icaro",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        imageProfile: profile_5,
        imagePost: p5_img,
    },
    {
        id: 6,
        name: "Luna B.",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        imageProfile: profile_6,
        imagePost: p6_img,
    },
    {
        id: 7,
        name: "Thiago Lima",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        imageProfile: profile_7,
        imagePost: p7_img,
    },
    {
        id: 8,
        name: "Livia",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        imageProfile: profile_8,
        imagePost: p8_img,
    },
    {
        id: 9,
        name: "Paulo Moreira",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        imageProfile: profile_9,
        imagePost: p9_img,
    },
    {
        id: 10,
        name: "Luana",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        imageProfile: profile_10,
        imagePost: p10_img,
    },
    {
        id: 11,
        name: "Vivian",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        imageProfile: profile_11,
        imagePost: p11_img,
    },

    //Para o carrossel TESTAR POIS NUNCA FIZ ANTES 
    {
        id: 12,
        name: "Alexandre",
        like: getRandomNumber(1, 1000),
        comentarios: getRandomNumber(0, 100),
        imageProfile: profile_12,
        imagePost: [c_1, c_2, c_3],
    }
];


//export default all_users_exemples;
export {all_users_exemples};