import { useState, useEffect } from 'react';
import styles from './index.module.css';
import googleLogo from './assets/logo.google.png';
import appleLogo from './assets/logo.apple.png';
import microsoftLogo from './assets/logo.microsoft.jpg';
import linkedinLogo from './assets/logo.linkedin.jpg';

export default function App() {
  const [count, setCount] = useState(0);
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const upCount = (num) => {
    setCount(prev => prev + num);
  };

  useEffect(() => {
    if (count === 0) return;

    const emailCorreto = 'usuario@email.com';
    const senhaCorreta = '1234';

    if (email === emailCorreto && senha === senhaCorreta) {
      alert(`Login realizado com sucesso!\n\nE-mail: ${email}\nSenha: ${senha}`);
    } else {
      alert(`Informações incorretas!\n\nE-mail digitado: ${email}\nSenha digitada: ${senha}\n\nTente novamente.`);
    }
  }, [count]);

  return (
    <div className={styles.pagina}>

      <header className={styles.header}>
        <img src={linkedinLogo} alt="LinkedIn" className={styles.logoImg} />
      </header>

      <main className={styles.main}>
        <div className={styles.card}>

          <h1 className={styles.titulo}>Entrar</h1>
          <p className={styles.subtitulo}>
            Novo usuário do LinkedIn?{' '}
            <a href="#" className={styles.link}>Cadastre-se agora</a>
          </p>

          <button type="button" className={styles.botaoSocial}>
            <img src={googleLogo} alt="Google" className={styles.logoIcone} />
            Continuar com o Google
          </button>

          <button type="button" className={styles.botaoSocial}>
            <img src={microsoftLogo} alt="Microsoft" className={styles.logoIcone} />
            Entrar com a Microsoft
          </button>

          <button type="button" className={styles.botaoSocial}>
            <img src={appleLogo} alt="Apple" className={styles.logoIcone} />
            Entrar com Apple
          </button>

          <div className={styles.separador}>
            <span className={styles.separadorLinha}></span>
            <span className={styles.separadorTexto}>ou</span>
            <span className={styles.separadorLinha}></span>
          </div>

          <div className={styles.campoGrupo}>
            <label className={styles.label}>E-mail ou telefone</label>
            <input
              type="email"
              tag="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.campoGrupo}>
            <label className={styles.label}>Senha</label>
            <div className={styles.inputSenhaContainer}>
              <input
                type={mostrarSenha ? 'text' : 'password'}
                tag="senha"
                className={styles.inputSenha}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              <button
                type="button"
                className={styles.olhoBtn}
                onClick={() => setMostrarSenha(!mostrarSenha)}
              >
                {mostrarSenha ? (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94"/>
                    <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <a href="#" className={styles.esqueceuSenha}>Esqueceu a senha?</a>

          <div className={styles.manterAcesso}>
            <input type="checkbox" id="manter" className={styles.checkbox} defaultChecked />
            <label htmlFor="manter" className={styles.checkboxLabel}>Manter acesso</label>
          </div>

          <button
            type="button"
            className={styles.botaoEntrar}
            onClick={() => upCount(1)}
          >
            Entrar
          </button>

        </div>
      </main>


      <footer className={styles.footer}>
        <p>LinkedIn Corporation © 2026 · <a href="#" className={styles.footerLink}>Contrato do Usuário</a> · <a href="#" className={styles.footerLink}>Política de Privacidade</a></p>
      </footer>

    </div>
  );
}
