import home_video from '../../constants/utils/home_video.mp4'
import LinkBtn from '../../constants/components/LinkBtn'

const HomePage = () => {
    return (
        <>
            <div className='home-container' style={{marginTop: '20px'}}>
                <div className='home-child-section-1'>
                        <p style={{textAlign: 'center', color: 'rgb(74,74,74)', fontWeight: '500'}}>Introducing Your New Workout Wardrobe</p>
                        <LinkBtn style={styles} redirectStr={"/shop"} label={"Start Shopping"} classed={'testings'}/>
                </div>
                <div className="home-child-section-2">
                    <video className='home-video' width="100%" height="auto" autoPlay loop muted>
                        <source src={home_video} type="video/mp4" />
                    </video>
                </div> 
            </div>
        </>
    )
}

const styles = {
   
  };
export default HomePage