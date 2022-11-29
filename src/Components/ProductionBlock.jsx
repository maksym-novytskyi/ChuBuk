import btnLeft from '../assets/img/btnLeft.png'
import btnRight from '../assets/img/btnRight.png'
import slide1 from '../assets/img/sliders/1.png'
import slide2 from '../assets/img/sliders/2.png'
import slide3 from '../assets/img/sliders/3.png'

const ProductionBlock = ({id}) => {
  return (
      <div className={'production__block'} id={id}>
          <p className={'main__title'}>Our Production</p>
          <div className={'production__block__sliders'}>
              <img src={slide1} alt=""/>
              <img src={slide2} alt=""/>
              <img src={slide3} alt=""/>
          </div>
          <div className={'buttons'}>
              <button className={'btn btn__left'}>
                  <img src={btnLeft} alt="btnLeft"/>
              </button>
              <button className={'btn btn__right'}>
                  <img src={btnRight} alt="btnRight"/>
              </button>
          </div>
      </div>
  )
}

export default ProductionBlock;