import copyImg from '../../assets/images/copy.svg';
import './styles.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {

  function copyRoomCodeToClipooard() {
    navigator.clipboard.writeText(props.code)
  }

  return (
    <button 
      className="room-code"
      onClick={copyRoomCodeToClipooard}
    >
      <div>
        <img src={copyImg} alt="Copy rum code" />
      </div>
      <span>Sala #`{props.code}`</span>
    </button>
  )
}