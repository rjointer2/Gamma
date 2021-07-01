
// Physics

export function bottom() { return this.y + this.height };
export function top() { return this.x + this.width };
export function x_cood() { return this.x };
export function y_cood() { return this.y };

export function borderDetectionPlayer1() {
    if(this.x_cood() > 148  ) {
        this.x = 148;
    }
    return false;
};

export function borderDetectionPlayer2() {
    if(this.x_cood() < 148  ) {
        this.x = 148;
    }
    return false;
};

