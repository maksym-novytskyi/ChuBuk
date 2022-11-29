import mainPhoto from '../assets/img/mainPhoto.png'
import facebook from '../assets/img/Facebook_white.png'
import google from '../assets/img/Google_white.png'
import phone from '../assets/img/Phone_white.png'

const MainPhoto = ({id}) => {
    return(
        <div id={id} className={'main'}>
            <div className={'main__text'}>
                <div className={'title'}>CHUBUK</div>
                <div className={'text'}>Manufacture of polymer and plastic hatches</div>
                <div className={'social'}>
                    <img src={facebook} alt="facebook"/>
                    <img src={google} alt="google"/>
                    <img src={phone} alt="phone"/>
                </div>
            </div>
            <div className={'main__photo'}>
                <img src={mainPhoto} alt="mainPhoto"/>
            </div>
        </div>
    )
}

export default MainPhoto;