class Heroi {
    constructor(nome, nivel, xpAtual, xpMax) {
      this.nome = nome;
      this.nivel = nivel;
      this.xpAtual = xpAtual;
      this.xpMax = xpMax;
    }
  
    ganharXP(quantidade) {
      this.xpAtual += quantidade;
      if (this.xpAtual >= this.xpMax) {
        this.subirNivel();
      }
    }
  
    subirNivel() {
      this.nivel += 1;
      this.xpAtual = 0;
      this.xpMax = this.nivel * 100;
      console.log(`${this.nome} subiu para o nível ${this.nivel}!`);
    }
  
    obterTitulo() {
      if (this.xpAtual < 1000) {
        return "Ferro";
      } else if (this.xpAtual >= 1001 && this.xpAtual <= 2000) {
        return "Bronze";
      } else if (this.xpAtual >= 2001 && this.xpAtual <= 5000) {
        return "Prata";
      } else if (this.xpAtual >= 6001 && this.xpAtual <= 7000) {
        return "Ouro";
      } else if (this.xpAtual >= 7001 && this.xpAtual <= 8000) {
        return "Platina";
      } else if (this.xpAtual >= 8001 && this.xpAtual <= 9000) {
        return "Ascendente";
      } else if (this.xpAtual >= 9001 && this.xpAtual <= 10000) {
        return "Imortal";
      } else {
        return "Radiante";
      }
    }
  
    mostrarStatus() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Nível: ${this.nivel}`);
      console.log(`XP: ${this.xpAtual}/${this.xpMax}`);
      console.log(`Título: ${this.obterTitulo()}`);
    }
  }
  const heroi = new Heroi("PedrosoHero", 1, 1000, 100);
  
  heroi.mostrarStatus();
  heroi.ganharXP(1500);
  heroi.mostrarStatus();
  
  