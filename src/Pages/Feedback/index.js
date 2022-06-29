import Map from "../../Compponents/Map"
import FeedbackForm from "../../Forms/FeedbackForm"
import Smile from '../../assets/images/red_cartoon 4.svg'
const Feedback = () => {
  return (
    <div>
      <SmileBaloon />
      <Map />
      <FeedbackForm />
    </div>
  )
}

export default Feedback


const SmileBaloon = () => <img style={{}} src={Smile} />
