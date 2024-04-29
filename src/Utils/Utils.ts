import { beerOutline, golfOutline, pulseOutline, restaurantOutline } from "ionicons/icons";

interface Recipe {
    id: number;
    name: string;
    Dados: string[];
    Descrição: string;
    precodia: string;
    Loja: string;
    disponiveis: number;
    image: string;
    feito: boolean;
}

const getInboxItems = (): Recipe[] => [
    {
            "id": 1,
            "name": "Renault Captur",
            "Dados": [
                "Carro SUV",
                "Carro a Gasolina",
                "caixa manual",
                "90cv",
                "velocidade máxima :168km/h",
                "5 portas",
            ],
            "Descrição": "Com a sua silhueta esculpida, grelha mais larga e pára-choques expressivo, o Captur tem um aspeto robusto, próprio de um SUV. O seu interior generosamente proporcional e os seu motor híbrido fazem uma afirmação ousada.",
            "precodia": "75 euros",
            "Loja": "Barcelos",
            "disponiveis": 13,
            "image": "https://www.renault.pt/agg/vn/unique/grade_carrousel_main_1_small/grade_carrousel_1.png?uri=https%3A%2F%2Fpt.co.rplug.renault.com%2Fproduct%2Fmodel%2FCP1%2Fcaptur%2Fc%2FA-ENS_0MDL2PSL1SERIELIM2_-TENNP-HJB",
            "feito": false

            
        },
        {
            "id": 2,
            "name": "Seat Arona",
            "Dados": [
                "Carro SUV",
                "Carro a Gasolina",
                "caixa automática",
                "115cv",
                "velocidade máxima :182km/h",
                "5 portas",
            ],
            "Descrição": "O Arona pode chegar com características que lhe permitem uma atitude aventureira, mas não descura na imagem elegante mais apropriada à cidade. Assente na plataforma MQB A0, que dá vida também ao Ibiza, destaca-se pelo dinamismo",
            "precodia": "95 euros",
            "Loja": "viana do Castelo",
            "disponiveis": 10,
            "image": "https://mediaservices.arval.com/Large_1.5_x1/Pix_PNG2048/PT/SEAT/Arona/2023/5SUV/23aronafreditionsu1fb/seat_23aronafreditionsu1fb_lowaggressive.png",
            "feito": false

            
        },
        {
            "id": 3,
            "name": "kia Stonic",
            "Dados": [
                "Carro SUV",
                "Carro a Gasolina",
                "caixa manual",
                "84cv",
                "velocidade máxima :165km/h",
                "5 portas",
            ],
            "Descrição": "Do mais relaxado Stonic Dynamic ao excitante Stonic GT-line, os carros SUV da gama Kia Stonic são pequenos, mas oferecem grandes possibilidades! Para começar, uma aparência que desafia as convenções com linhas desportivas, robustas e ousadas. Para terminar, a gama de dois motores a gasolina que oferece prestações dinâmicas com baixas emissões, transformando cada viagem num momento de prazer!",
            "precodia": "70 euros",
            "Loja": "viana do Castelo",
            "disponiveis": 6,
            "image": "https://kia.pt/wp-content/uploads/2020/11/kia-stonic-gls-my22-udclearwhite-17b_0014.png",
            "feito": false

            
        },
        {
            "id": 4,
            "name": "BMW 520 Série 5",
            "Dados": [
                "Carro Sedan",
                "Carro a Diesel",
                "caixa automática",
                "190cv",
                "velocidade máxima :225km/h",
                "4 portas",
            ],
            "Descrição": "Mestre no seu segmento: o BMW Série 5 Touring combina a funcionalidade excecional e o conforto em viagens longas de um BMW Touring com a imagem icónica e a dinâmica dos modelos BMW Série 5",
            "precodia": "195 euros",
            "Loja": "Porto",
            "disponiveis": 2,
            "image": "https://www.bmw.pt/content/dam/bmw/common/all-models/5-series/sedan/2023/5-series-sedan-silver.png",
            "feito": false,

            
        },
        {
            "id": 5,
            "name": "Volkswagen Golf",
            "Dados": [
                "Carro Utilitário",
                "Carro a Gasolina",
                "caixa manual",
                "230cv",
                "velocidade máxima :270km/h",
                "5 portas",
            ],
            "Descrição": "Happy Car Rent está a alugar um Volkswagen da edição limitada “The Original”. Um detalhe que o destaca das outras versões são alguns vinis com o nome, um pequeno spoiler e, sobretudo, uma placa de identificação com o número de série",
            "precodia": "50 euros",
            "Loja": "Barcelos",
            "disponiveis": 17,
            "image": "https://maynardsgarage.com/wp-content/uploads/2022/09/GolfR_Exterior.jpg",
            "feito": false

            
        },
        {
            "id": 6,
            "name": "Audi A3",
            "Dados": [
                "Carro Utilitário",
                "Carro a Gasolina",
                "caixa manual",
                "125cv",
                "velocidade máxima :202km/h",
                "3 portas",
            ],
            "Descrição": "O Audi A3 é um carro compacto produzido pelo fabricante alemão Audi. O Audi A3 de 2003 pertence à primeira geração do modelo, que foi produzida de 1996 a 2003",
            "precodia": "75 euros",
            "Loja": "Porto",
            "disponiveis": 7,
            "image": "https://heycar.com.br/media/plg_jspeed/cache/images/A3-97.webp",
            "feito": false

            
        },
       
    ];       

    export {getInboxItems};
