

const ContactsBlock = ({id}) => {
    return (
      <div className={'contacts__block'} id={id}>
          <p className={'main__title'}>Company Contacts</p>
          <div className={'contacts__blocks'}>
              <div className={'contacts__blocks_items'}>
                  <span>Kleinunternehmer Oleksii Chubuk</span>
                  <span>Einzel- und Großhandel von Haushalts- und Gartengütern und Prodution und Herstellung von Lippenbalsam (47.59.9)</span>
                  <span>Email: contact@chubuk.de</span>
              </div>
              <div className={'contacts__blocks_items'}>
                  <span>Tel.: +49 171 2126138</span>
                  <span>Website: chubuk.de</span>
                  <span>Breitenau 28, 91619,</span>
                  <span>Obernzenn, Deutschland</span>
              </div>
              <div className={'contacts__blocks_items'}>
                   <span>Herr Oleksii Chubuk</span>
                   <span>IBAN: DE29 7606 9372 0105 7180 82</span>
                   <span>BIC: GENODEF1WDS</span>
                   <span>Kunden-Nr. 0571808200</span>
              </div>
          </div>
      </div>
  )
}

export default ContactsBlock;