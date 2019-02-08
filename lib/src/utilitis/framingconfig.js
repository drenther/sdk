"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getFramingConfig() {
    return {
        'IMAGE_WIDTH': 544,
        'IMAGE_HEIGHT': 360,
        'MIN_FRAME_CHANGE_TIME': 8000,
        'MIN_FRAME_DELTA': 0.17,
        'FRAME_AVG_LIMIT': 5000,
        'NO_PREDICTION_LIMIT': 4000,
        'MAX_DELTA_FRAME_TRANSITION': 0,
        'HISTORY_MODE': 'ENCLOSING',
        'BBOX_TOP_PADDING': 0.8,
        'BBOX_SIDE_PADDING': 3.5,
        'BBOX_BOTTOM_PADDING': 4.5,
        'SAFE_AREA_PCT': 0.01,
        'SAFE_ZOOM': false,
        'VERTICAL_ALIGN_TOP_TO_BOTTOM_RATIO': 0.2,
        'MAX_ZOOM': 2.6,
        'AUTO_PTZ': true
    };
}
exports.getFramingConfig = getFramingConfig;
//# sourceMappingURL=framingconfig.js.map