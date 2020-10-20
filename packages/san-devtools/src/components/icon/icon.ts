/* eslint-disable */
const PATH_START_RECORD = ['M920.833 281.025a37 37 0 0 0-36.959-0.071L728.47 370.148V233.041c0-20.435-16.565-37-37-37H121.708c-20.435 0-37 16.565-37 37V790.96c0 20.435 16.565 37 37 37H691.47c20.435 0 37-16.565 37-37V653.865l155.406 89.182a36.975 36.975 0 0 0 18.416 4.909 37 37 0 0 0 37-37V313.044a36.998 36.998 0 0 0-18.459-32.019zM525.402 541.971L385.664 651.059a36.993 36.993 0 0 1-38.929 4.118 37 37 0 0 1-20.839-33.139l-0.857-219.66a37.002 37.002 0 0 1 59.873-29.228l140.597 110.572a37 37 0 0 1-0.107 58.249z m339.89 105.092L728.47 568.546V455.47l136.822-78.529v270.122z'];
const PATH_EYE = ['M958.87 491.603c-2-3.026-49.857-74.939-127.429-147.55-46.091-43.144-93.249-77.65-140.164-102.56C630.836 209.4 570.519 193.129 512 193.129S393.164 209.4 332.723 241.492c-46.915 24.91-94.073 59.416-140.164 102.56C114.987 416.664 67.13 488.577 65.13 491.603a37.002 37.002 0 0 0 0 40.795c2 3.026 49.857 74.939 127.429 147.55 46.091 43.144 93.249 77.65 140.164 102.56C393.164 814.6 453.481 830.871 512 830.871s118.836-16.271 179.277-48.363c46.915-24.91 94.073-59.416 140.164-102.56 77.571-72.611 125.429-144.524 127.429-147.55a37.002 37.002 0 0 0 0-40.795zM512 756.871c-172.554 0-323.972-182.705-370.487-244.871C188.049 449.809 339.459 267.129 512 267.129S835.95 449.808 882.486 512C835.95 574.192 684.541 756.871 512 756.871z', 
'M512 512m-162.154 0a162.154 162.154 0 1 0 324.308 0 162.154 162.154 0 1 0-324.308 0Z'];
const PATH_EYE_INVISIBLE = ['M958.87 491.603c-2-3.026-49.857-74.939-127.429-147.55-17.673-16.543-35.503-31.803-53.416-45.752l61.746-61.746c14.449-14.45 14.449-37.876 0-52.326-14.449-14.449-37.877-14.449-52.326 0l-71.343 71.343a531.341 531.341 0 0 0-24.825-14.078C630.836 209.4 570.519 193.129 512 193.129S393.164 209.4 332.723 241.492c-46.915 24.91-94.073 59.416-140.164 102.56C114.987 416.664 67.13 488.577 65.13 491.603a37.002 37.002 0 0 0 0 40.795c2 3.026 49.857 74.939 127.429 147.55 17.673 16.543 35.503 31.803 53.416 45.752l-61.746 61.746c-14.449 14.45-14.449 37.876 0 52.326 7.225 7.225 16.694 10.837 26.163 10.837s18.938-3.612 26.163-10.837l71.343-71.343a531.341 531.341 0 0 0 24.825 14.078C393.164 814.6 453.481 830.871 512 830.871s118.836-16.271 179.277-48.363c46.915-24.91 94.073-59.416 140.164-102.56 77.571-72.611 125.429-144.524 127.429-147.55a37.002 37.002 0 0 0 0-40.795zM141.513 512C188.049 449.809 339.459 267.129 512 267.129c52.763 0 103.548 17.085 149.964 42.581l-64.529 64.529c-24.825-15.452-54.103-24.393-85.435-24.393-89.412 0-162.154 72.742-162.154 162.154 0 31.332 8.941 60.61 24.394 85.435l-75.488 75.489C224.02 616.358 167.008 546.074 141.513 512zM512 756.871c-52.763 0-103.549-17.085-149.964-42.581l64.529-64.53c24.825 15.452 54.103 24.393 85.435 24.393 89.412 0 162.154-72.742 162.154-162.154 0-31.332-8.941-60.61-24.394-85.435l75.488-75.488C799.972 407.637 856.981 477.914 882.486 512 835.95 574.192 684.541 756.871 512 756.871z'];

const ICONS = {
    'start-record': PATH_START_RECORD,
    'eye': PATH_EYE,
    'eye-invisible': PATH_EYE_INVISIBLE
};

const initialDescriptors = new Map([
    ['largeicon-add', {position: 'a8'}],
    ['largeicon-camera', {position: 'b7'}],
    ['largeicon-center', {position: 'c9'}],
    ['largeicon-checkmark', {position: 'c8'}],
    ['largeicon-chevron', {position: 'c7'}],
    ['largeicon-clear', {position: 'a6'}],
    ['largeicon-copy', {position: 'b6'}],
    ['largeicon-deactivate-breakpoints', {position: 'c6'}],
    ['largeicon-delete', {position: 'd9'}],
    ['largeicon-dock-to-bottom', {position: 'd8'}],
    ['largeicon-dock-to-left', {position: 'd7'}],
    ['largeicon-dock-to-right', {position: 'd6'}],
    ['largeicon-download', {position: 'h6'}],
    ['largeicon-edit', {position: 'a5'}],
    ['largeicon-eyedropper', {position: 'b5'}],
    ['largeicon-filter', {position: 'c5'}],
    ['largeicon-hide-bottom-sidebar', {position: 'e9'}],
    ['largeicon-hide-left-sidebar', {position: 'e8'}],
    ['largeicon-hide-right-sidebar', {position: 'e7'}],
    ['largeicon-hide-top-sidebar', {position: 'e6'}],
    ['largeicon-large-list', {position: 'e5'}],
    ['largeicon-layout-editor', {position: 'a4'}],
    ['largeicon-load', {position: 'h5'}],
    ['largeicon-longclick-triangle', {position: 'b4'}],
    ['largeicon-menu', {position: 'c4'}],
    ['largeicon-navigator-domain', {position: 'd4'}],
    ['largeicon-navigator-file', {position: 'e4'}],
    ['largeicon-navigator-file-sync', {position: 'f9'}],
    ['largeicon-navigator-folder', {position: 'f8'}],
    ['largeicon-navigator-frame', {position: 'f7'}],
    ['largeicon-navigator-snippet', {position: 'f6'}],
    ['largeicon-navigator-worker', {position: 'f5'}],
    ['largeicon-node-search', {position: 'f4'}],
    ['largeicon-pan', {position: 'a3'}],
    ['largeicon-pause-animation', {position: 'b3'}],
    ['largeicon-pause', {position: 'c3'}],
    ['largeicon-pause-on-exceptions', {position: 'd3'}],
    ['largeicon-phone', {position: 'e3'}],
    ['largeicon-play-animation', {position: 'f3'}],
    ['largeicon-play-back', {position: 'a2'}],
    ['largeicon-play', {position: 'b2'}],
    ['largeicon-pretty-print', {position: 'c2'}],
    ['largeicon-refresh', {position: 'd2'}],
    ['largeicon-replay-animation', {position: 'e2'}],
    ['largeicon-resume', {position: 'f2'}],
    ['largeicon-rotate', {position: 'g9'}],
    ['largeicon-rotate-screen', {position: 'g8'}],
    ['largeicon-search', {position: 'h4'}],
    ['largeicon-settings-gear', {position: 'g7'}],
    ['largeicon-shortcut-changed', {position: 'i4'}],
    ['largeicon-show-bottom-sidebar', {position: 'g6'}],
    ['largeicon-show-left-sidebar', {position: 'g5'}],
    ['largeicon-show-right-sidebar', {position: 'g4'}],
    ['largeicon-show-top-sidebar', {position: 'g3'}],
    ['largeicon-start-recording', {position: 'g2'}],
    ['largeicon-step-into', {position: 'a1'}],
    ['largeicon-step-out', {position: 'b1'}],
    ['largeicon-step-over', {position: 'c1'}],
    ['largeicon-step', {position: 'h1'}],
    ['largeicon-stop-recording', {position: 'd1'}],
    ['largeicon-terminate-execution', {position: 'h2'}],
    ['largeicon-trash-bin', {position: 'f1'}],
    ['largeicon-undo', {position: 'h7'}],
    ['largeicon-undock', {position: 'g1'}],
    ['largeicon-visibility', {position: 'h9'}],
    ['largeicon-waterfall', {position: 'h8'}],
    ['largeicon-breaking-change', {position: 'h3'}],
    ['largeicon-link', {position: 'i1'}],
    ['largeicon-dual-screen', {position: 'i2'}],
    ['largeicon-experimental-api', {position: 'i3'}],
  ]);

export default ICONS;
export {
    initialDescriptors
}