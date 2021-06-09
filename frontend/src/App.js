import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className="app_videos">
          <Video url ={"https://v16m.tiktokcdn.com/1786308703739b8527ec172cf355c121/60bf9419/video/tos/useast2a/tos-useast2a-ve-0068c004/d031e75a64884de08cfd88254a857ceb/?a=1233&br=1544&bt=772&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202106081000150101890731325004F5C3&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am9obzZuOTxoNTMzNzczM0ApNGY4aDhpNmU5Nzc6OWQ4ZGdya2c2M3FnaWJgLS1kMTZzczItX2FgMDUtY141NGEyMS46Yw%3D%3D&vl=&vr="} 
          channel ={"arlindi"}
          messages = {120}
          likes = {210}
          shares={32}
          description={"demo desc"}
          song = {"this is song name "}

          />
          <Video url ={"https://v16m.tiktokcdn.com/6b30c8ad8778ffc5a46dcd9001c8f427/60bf937f/video/tos/useast2a/tos-useast2a-ve-0068c003/8946f6b0ccd84a6cb33f5a868c8b57bb/?a=1233&br=4028&bt=2014&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202106080957420101901871630B04EF0A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajx5eXc8Omd4NTMzNzczM0ApZ2U7PDVnNmVoN2c1ZWdlZGcuaGtrcTMyLXJgLS1kMTZzc2I0NC1hLWEyLy9jLS5hNGA6Yw%3D%3D&vl=&vr="} 
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
