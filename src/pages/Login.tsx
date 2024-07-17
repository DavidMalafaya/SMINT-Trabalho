import React from 'react';
import './Login.css';
import { IonContent, IonPage, IonButton, IonInput, IonItem, IonHeader, IonTitle, IonToolbar, IonLabel, IonLoading, IonModal } from '@ionic/react';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showLoading, setShowLoading] = React.useState(false);

  const handleLogin = async () => {
    setShowLoading(true);

    console.log('Email:', email);
    console.log('Password:', password);
    setShowLoading(false);
    
  };

  return (
    <IonPage className="login-page">
      <IonContent className="ion-padding">
        <div className="login-form" >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Login</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail((e.target as unknown as HTMLInputElement).value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput
              type="password"
              value={password}
              onIonChange={(e) => setPassword((e.target as unknown as HTMLInputElement).value)}
            />
          </IonItem>
          <IonButton id="open-modal" expand="block" onClick={handleLogin}>  
            Login
          </IonButton>
          <IonModal
          trigger="open-modal" 
          initialBreakpoint={0.25}
          breakpoints={[0, 0.25, 0.5, 0.75]}
          handleBehavior="cycle"
        >
          <IonContent className="ion-padding">
            <div className="ion-margin-top">
              <IonLabel>Login Concluíudo !</IonLabel>
            </div>
          </IonContent>
        </IonModal>
          <IonButton expand="block" onClick={handleLogin}>
            Esqueceu a senha?
          </IonButton>
          <IonLoading isOpen={showLoading} message={'Please wait...'} />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;



