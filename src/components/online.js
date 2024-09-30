import useSWR from 'swr'
import styles from './layout.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ server = "sg" }) {

  var host;
  var seraddress;
  if(server == "近离3.4GIO真端"){
        host = "a.jinli90.com:20011/api?cmd=1101"
        seraddress = "三端同步：a.jinli90.com:4433"
  } else if(server == "星铁2.5剧情端"){
        host = "jinli90.com:20001"
        seraddress = "PC安卓双端：jinli90.com:20001"
  } else if(server == "星铁2.5无剧情端"){
        host = "jinli90.com:20000"
        seraddress = "PC安卓双端：jinli90.com:20000"
  }

  const { data, error } = useSWR(
    `http://${host}/status/server`,
    fetcher
  );

  console.log("tes", data);

  var online = "?";
  if(data){
    if(data.status){
      if(data.status.playerCount){
        online = data.status.playerCount;
      }
    }
  }
  
  return (

      <div class="stat">
        <div class="stat-title">{server}</div>
        <div class="stat-value">{online}</div>
        <div class="stat-desc">在线人数</div>
        <div class="stat-desc">{seraddress}</div>
      </div>

  );
}
