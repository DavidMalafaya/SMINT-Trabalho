import React from 'react';
import './Login.css';
import { IonContent, IonPage, IonButton, IonInput, IonItem } from '@ionic/react';
import { px } from 'framer-motion';



class Login extends React.Component<any, any> {

  

  constructor(props: any) {
    super(props);

    this.state = {
      userName: null,
      password: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);

    
  }

  setUserName(value: any) {
    this.setState({ 'userName': value });
  }

  setPassword(value: any) {
    this.setState({ 'password': value });
  }

  handleSubmit() {

    let params = this.state;

  
  }

  render() {
    return (
      <IonPage>
        <IonContent>
          <div className="login-wrapper">
            
            <div className="brand">
               Login
            </div>

            <IonItem>
              <IonInput placeholder="Nome Utilizador" onIonChange={e => this.setUserName(e.detail.value!)}></IonInput>
            </IonItem>

            <IonItem>
              <IonInput placeholder="Palavra-Passe" type="password" onIonChange={e => this.setPassword(e.detail.value!)}></IonInput>
            </IonItem>

            <IonButton expand="full" onClick={this.handleSubmit} disabled={!this.state.userName || !this.state.password}>
              Concluído
            </IonButton>

            <IonButton expand="full" routerLink="/Forgot password">Esqueceu a senha?</IonButton>

          </div>

        </IonContent>
      </IonPage>
    );
  }
}

export default Login;