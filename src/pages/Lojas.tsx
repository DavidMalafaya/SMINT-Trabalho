import React from "react"; 
import { IonPage, IonHeader, IonToolbar, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonTitle, IonImg, IonButton } from "@ionic/react";
import './Lojas.css';

const Lojas: React.FC = () => {
  const listaLojas = [{nome: "Loja 1", imagem:"https://st2.depositphotos.com/1033329/5394/i/600/depositphotos_53946361-stock-photo-viana-do-castelo.jpg", endereco: "Rua A, 123", cidade: "Viana de Castelo"},
   {nome: "Loja 2", imagem:"https://images.unsplash.com/photo-1709421017696-292cac5d39ca?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", endereco: "Rua B, 456", cidade: "Porto"},
   {nome: "Loja 3", imagem:"https://images.unsplash.com/photo-1693580760190-a795f44cb6c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fEJyYWdhfGVufDB8fDB8fHww", endereco: "Rua C, 789", cidade: "Braga"}];

  const exibirDetalhesLoja = (loja: any) => {
    // Lógica para exibir detalhes da loja, como um modal
    console.log("Exibindo detalhes da loja:", loja);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lojas</IonTitle>
        </IonToolbar>
       </IonHeader>
       <IonContent>
        <IonGrid>
          <IonRow>
            {listaLojas.map((loja, index) => (
              <IonCol size="4" key={index}>
                <IonCard color="dark" onClick={() => exibirDetalhesLoja(loja)}>
                  <IonCardHeader color="primary">
                    <IonCardTitle>{loja.nome}</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <IonImg src={loja.imagem}></IonImg>
                    <p>Endereço: {loja.endereco}</p>
                    <p>Cidade: {loja.cidade}</p>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            ))}
            </IonRow>
            </IonGrid>
            </IonContent>
            </IonPage>
  );
};
export default Lojas;