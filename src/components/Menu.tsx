import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonImg
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { bookmarkOutline, carOutline, carSharp, homeOutline, homeSharp, logIn, logInOutline, pricetagOutline, pricetagSharp, } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Login',
    url: '/Login',
    iosIcon: logInOutline,
    mdIcon: logIn
  },
  {
    title: 'Inicio',
    url: '/Inicio',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'Lojas',
    url: '/Lojas',
    iosIcon: pricetagOutline,
    mdIcon: pricetagSharp
  },
  {
    title: 'Frota',
    url: '/Frota',
    iosIcon: carOutline,
    mdIcon: carSharp
  },
  
];

const labels = ['SUV', 'Desportivo', 'Familiar'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonImg src="https://imagehost9.online-image-editor.com/oie_upload/images/171340407888BqW60/transparent.png" alt="logo" />
          <IonListHeader>Happy Car Rent</IonListHeader>
          <IonNote>Conduza com Happy Car Rent</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Carros</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
