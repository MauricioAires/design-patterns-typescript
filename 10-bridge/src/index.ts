import IPlatform from './platforms/IPlatform';
import Live from './transmissions/Live';
import YouTube from './platforms/YouTube';
import Twitch from './platforms/Twitch';
import AdvancedLive from './transmissions/AdvancedLive';

function startLive(platform: IPlatform) {
  console.log('Aguarde...');

  const live = new Live(platform);

  live.broadcastring();
  live.result();
}

function startAdvancedLive(platform: IPlatform) {
  console.log('Aguarde...');

  const live = new AdvancedLive(platform);

  live.broadcastring();
  live.result();
  live.comments();
  live.subtitle();
}

// startLive(new Twitch());
// startLive(new YouTube());

startAdvancedLive(new YouTube());
startAdvancedLive(new Twitch());
