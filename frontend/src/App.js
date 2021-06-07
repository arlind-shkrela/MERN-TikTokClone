import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className="app_videos">
          <Video url ={"https://v16m.tiktokcdn.com/01f4ec4102dd29da9020002906c5eab3/60bce8e9/video/tos/alisg/tos-alisg-pve-0037/f57a3fb7de134bbeb6d0734ff0b4fbb2/?a=1180&br=2132&bt=1066&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202106060925090101890710305106DF58&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3BveDk3d2l1NTMzODgzM0ApOjs8PGRpNWVkNzRlPDQ5OWcwXmRlZjA0NmdgLS1kLzRzc182MV4yNDJiYjYuLWAvMmI6Yw%3D%3D&vl=&vr="} 
          channel ={"arlindi"}
          messages = {120}
          likes = {210}
          shares={32}
          description={"demo desc"}
          song = {"this is song name "}

          />
          <Video url ={"https://v16m.tiktokcdn.com/a33f19379b9ff323519604681279e249/60bd0895/video/tos/useast2a/tos-useast2a-pve-0068/dbbc70a725a34a8583bb904e5f2ea37b/?a=1233&br=1748&bt=874&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202106061140040101890651350802A8FC&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajZvZDxmOmVtNDMzMzczM0ApNGQ6ZzQ4OTszN2c5NmZmZmdrNmRtNmVrc2JgLS02MTZzc2AzX2M0YDNhX2A1LjEwMV46Yw%3D%3D&vl=&vr="} 
          channel ={"leandra"}
          messages = {430}
          likes = {510}
          shares={45}
          description={"demo desc 2.1"}
          song = {"alban skenderaj "}
          
          />
      </div>
    </div>
  );
}

export default App;
