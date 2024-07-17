import React, { useState, useEffect } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonButton, IonCol, IonImg } from '@ionic/react';
import { useParams, useHistory } from 'react-router';
import './Inicio.css';
import { Geolocation } from '@capacitor/geolocation';

const Inicio: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const { name } = useParams<{ name: string }>();
  const history = useHistory();

  useEffect(() => {
    const printCurrentPosition = async () => {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        setCurrentLocation({
          latitude: coordinates.coords.latitude,
          longitude: coordinates.coords.longitude,
        });
        console.log('::::::::::Current position:', coordinates);
      } catch (error) {
        console.error('Error getting current position:', error);
      }
    };

    printCurrentPosition();
  }, []);

  const findNearestStore = () => {
    console.log('::::::::::Find nearest store:', currentLocation);
  };

  const navigateToLojas = () => {
    history.push('/lojas');
  }

  const navigateToFrota = () => {
    history.push('/frota'); 
  };

  const newCars = [
    { name: 'Renault Clio'},
    { name: 'BMW X5'},
    { name: 'Lamborghini Huracán'},
  ];

    const awards = [
      { name: 'Prémio de mais aluguer em 2023 na zona norte'},
      { name: 'Prêmio Revelação do ano 2023'},
      { name: 'Prêmio Facilidade de Manutenção'},
      { name: 'Prêmio Segurança'}
    ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Início</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle color="primary">Black Friday</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          <p>
          A <strong>Black Friday está a chegar!</strong> Não perca as ofertas incríveis em nossa frota de carros premium.
          </p>
          <p>
          <strong>Ofertas Exclusivas:</strong>
          </p>
          <ul>
          <li>Não percas a oportunidade e aproveita promoções nos novos veículos</li>
          <li>Alugue com segurança e conforto com a nossa assistência 24h</li>
          <li>Benefícios especiais para clientes que alugarem em nossa loja física</li>
          <li>Descontos especiais para clientes que fizeram alugueres anteriores.</li>
          </ul>
          <p>
          <strong>Confira nossa seleção de carros e explore a nossa loja</strong>
          </p>
        </IonCardContent>

        </IonCard>

        <>
          <IonCard>
            <IonCardContent>
            <IonItem>
            <IonLabel>Novos Carros</IonLabel>

            <IonList>
              {newCars.map((car, index) => (
                <IonItem key={index}>
                  <IonLabel>{car.name}</IonLabel>
                  
                </IonItem>
              ))}
            </IonList>
          </IonItem>
            </IonCardContent>
            </IonCard>
          <IonCardContent>
          <IonItem>
          <IonLabel>Prêmios Ganhos</IonLabel>
          <IonList>
              {awards.map((award, index) => (
                <IonItem key={index}>
                  <IonLabel>{award.name}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonItem>
          </IonCardContent>
        </>
        {currentLocation && (
          <IonCard color="black">
            <IonCardHeader color="primary">
              <IonCardSubtitle>Localização Atual</IonCardSubtitle>
              <IonCardTitle>Loja Mais Próxima</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonLabel>Latitude: {currentLocation.latitude}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Longitude: {currentLocation.longitude}</IonLabel>
                </IonItem>
                <IonItem>
                  <IonButton onClick={navigateToLojas}>Encontrar Loja Mais Próxima</IonButton>
                </IonItem>
              </IonList>
            </IonCardContent>
          </IonCard>
        )}

        <IonButton expand="full" onClick={navigateToFrota} routerLink='/Frota'>
          Ver Frota
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;