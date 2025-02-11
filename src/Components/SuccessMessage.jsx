import sampleGif from '../assets/Animation.gif';

function SuccessMessage(){

    return(
    <div className="flex flex-col items-center justify-center bg-[#4bb159] rounded-xl p-12 font-merriweather">
      <img src={sampleGif} alt="Success" className="w-[6.25rem]" />
      <p className="text-base text-center">
        Thank you! <br />We&#39;ll reach out to you shortly.
      </p>
    </div>
  )
};

export default SuccessMessage;