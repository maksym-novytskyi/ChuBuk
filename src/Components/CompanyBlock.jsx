import ourCompanyPhoto from '../assets/img/ourCompanyPhoto.png'

const CompanyBlock = ({id}) => {
    return (
        <div className={'company__block'} id={id}>
            <p className={'main__title'}>Our company</p>
            <div className={'company__block__context'}>
                <div className={'company__block__context-test'}>
                    <img src={ourCompanyPhoto} alt="ourCompanyPhoto"/>

                    <p className={'text1'}>Traditional sewer hatches are made of cast iron and are used when passing to underground
                        utilities. Their main task, like hatches made of other materials, is to protect the pipeline or
                        other underground communications from damage, they also ensure the safety of people and cars on
                        roads and sidewalks. They were replaced by plastic and polymer hatches.</p>
                </div>

                <div className={'company__block__context-text'}>
                    <p className={'title'}>Aesthetics</p>
                    <p className={'text'}>Plastic hatches have an attractive appearance. In their production, a different color palette is
                        taken into account, which looks perfect and matches any road surface, be it paving slabs, lawn,
                        etc. To all this, hatches have increased resistance to color loss, as they are thoroughly
                        painted over with heat-resistant paint. For this reason, they retain their aesthetic appearance
                        for a long time.</p>
                    <p className={'title'}>Long operation</p>
                    <p className={'text'}>In the production of polymer hatches, the use of components that are not susceptible to
                        corrosion, the influence of any chemistry is implied: alkalis, various acids, etc. Thanks to
              7          what such hatches have long service life.</p>
                    <p className={'title'}>Light weight</p>
                    <p className={'text'}>The weight of both plastic and polymer hatches ranges from 10 to 15 kg. Accordingly, this
                        undoubtedly creates convenient conditions for transportation and installation.</p>
                </div>
            </div>
        </div>
    )
}

export default CompanyBlock;