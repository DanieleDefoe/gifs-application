import './Loading.css';

export default function Loading() {
  return (
    <div className="loading">
      <div className="weight">
        <div className="panda">
          <div className="panda__contain">
            <div className="panda__ears"></div>
            <div className="panda__head">
              <div className="panda__eyes"></div>
              <div className="panda__nose"></div>
            </div>
          </div>
          <div className="panda__arms"></div>
          <div className="panda__body"></div>
          <div className="panda__legs"></div>
        </div>
      </div>
      <div className="panda__shadow"></div>
    </div>
  );
}
