export default function CompetitionLoading() {
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content text-center">
        <div>
          <h1 className="mb-6 text-4xl font-bold">입장 중...</h1>
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      </div>
    </div>
  );
}
