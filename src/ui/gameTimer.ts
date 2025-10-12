export function addGameTimer(ctx: CanvasRenderingContext2D, gameTime: number, canvasWidth: number) {
  const x = canvasWidth - 75;
  const y = 40;

  ctx.fillStyle = 'white';
  ctx.font = '18px sans-serif';
  ctx.fillText(`${formatTime(gameTime)}`, x, y);
}

function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
