<template>
    <div class="privacy-policy-view-container">
      <section id="privacy-policy">
        <h1>Política de Privacidade</h1>
        <p>O site do <em>Projeto Lucro Máximo</em>  respeita o direito à privacidade e zela pela segurança dos dados pessoais de seus usuários. A nossa Política de Privacidade esclarece como coletamos, armazenamos e utilizamos as informações pessoais dos usuários. A fim de proporcionar maior segurança e transparência, poderemos alterar periodicamente a Política de Privacidade.</p>
        <p>Ao acessar, usar ou navegar por nosso site, você concorda expressa e voluntariamente, com todas as cláusulas desta Política de Privacidade, conforme abaixo detalhadas. Se você não concordar com a Política de Privacidade, não utilize os serviços deste site.</p>
        <p>A Política de Privacidade é válida para todos os usuários de nosso site.</p>
        <h3>Informações Coletadas</h3>
        <p>Nosso servidor não coleta automaticamente nenhuma informação sobre o domínio ou endereço de e-mail de nossos visitantes.</p>
        <h3>Links para outros sites</h3>
        <p>Nosso site poderá conter links para outros aplicativos, sites externos, parceiros e/ou patrocinadores, que podem ter políticas de privacidade diferentes das nossas, estando assim sujeitas às suas próprias práticas de obtenção e uso de dados. Lembre-se de que, se você fornecer informações pessoais em outros aplicativos, sites, fóruns, em nosso serviço de troca de mensagens, ou chats, tais informações poderão ser recolhidas e utilizadas indevidamente por terceiros.</p>
        <p>O site do <em>Projeto Lucro Máximo</em> não se responsabiliza pelo conteúdo de tais aplicativos nem pelo manuseio das informações por terceiros. Por isso, recomendamos que nossos usuários sempre leiam as normas de relacionamento e política de privacidade específicas dentro do próprio aplicativo ou site do parceiro ou patrocinador que colete suas informações.</p>
        <p id="last-paragraph">O site do <em>Projeto Lucro Máximo</em> reserva-se o direito de alterar esta Política de Privacidade. A última atualização ocorreu em 03 de abril de 2020. Ao utilizar a nosso site a partir desta data, você concorda com os termos e políticas de dados atualizados.</p>
      </section>
    </div>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  data () {
    return {
      items: [
        {
          itemURL: 'localhost:8080/sobre-nos',
          itemText: 'Sobre Nós'
        },
        {
          itemURL: '#servicos',
          itemText: 'Serviços'
        },
        {
          itemURL: '#depoimentos',
          itemText: 'Depoimentos'
        },
        {
          itemURL: '#contato',
          itemText: 'Contato'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .privacy-policy-view-container {
    #privacy-policy {
      padding: 4em 0;
      margin: 0 20%;
      background-color: white;

      h1, h3 {
        padding-bottom: 1em;
      }

      #last-paragraph {
        padding-top: 4em;
      }
    }
  }
</style>
