type statusInfo = 'PLAY' | 'PAUSE';
export class simpleTv {

    status: statusInfo;
    currentVolume: number;

    constructor(status: statusInfo, currentVolume: number) {
        this.status = status;
        this.currentVolume = currentVolume;
    }

    changeStatus() {

        if (this.status === 'PLAY')
            this.status = 'PAUSE'

        else if (this.status === 'PAUSE')
            this.status = 'PLAY'

    }

}