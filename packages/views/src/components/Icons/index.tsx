import React, {Suspense} from "react";
import {TouchableOpacity, View} from "react-native";
import {Theme} from "../../types";
import {useTheme} from "emotion-theming";
import {Path, Svg} from "react-native-svg";

export {Heart} from "./Heart";
const Color = require("color");

interface Props {
    name: string;
    size?: number;
    onPress?: () => void;
}

const Loader = ({size, color}: { size: number; color: string }) => (
    <View style={{height: size, width: size}}>
        <Svg viewBox="0 0 512 512">
            <Path
                fill={color}
                d="m45 300.007812c-24.8125 0-45-20.1875-45-45s20.1875-45 45-45c24.816406 0 45.003906 20.1875 45.003906 45s-20.1875 45-45.003906 45zm192.007812-200.003906c-27.570312 0-50.003906-22.429687-50.003906-50.003906 0-27.570312 22.433594-50 50.003906-50 27.570313 0 50 22.429688 50 50 0 27.574219-22.429687 50.003906-50 50.003906zm0-60.003906c-5.515624 0-10 4.488281-10 10 0 5.515625 4.484376 10 10 10 5.511719 0 10-4.484375 10-10 0-5.511719-4.488281-10-10-10zm-136.503906 122.003906c-12.957031 0-25.136718-5.042968-34.296875-14.207031-9.160156-9.160156-14.207031-21.339844-14.207031-34.292969 0-12.957031 5.046875-25.136718 14.207031-34.296875 9.160157-9.160156 21.339844-14.207031 34.296875-14.207031 12.953125 0 25.132813 5.046875 34.296875 14.207031h-.003906.003906c9.160157 9.160157 14.203125 21.339844 14.203125 34.296875 0 12.953125-5.042968 25.132813-14.207031 34.296875-9.160156 9.160157-21.339844 14.203125-34.292969 14.203125zm0-57c-1.316406 0-3.84375.320313-6.011718 2.488282-2.167969 2.167968-2.488282 4.695312-2.488282 6.011718s.320313 3.84375 2.488282 6.007813c2.167968 2.167969 4.695312 2.492187 6.011718 2.492187 1.3125 0 3.84375-.324218 6.007813-2.488281 2.167969-2.167969 2.492187-4.695313 2.492187-6.011719s-.324218-3.84375-2.488281-6.011718h-.003906c-2.164063-2.167969-4.695313-2.488282-6.007813-2.488282zm282.007813 59c-14.824219 0-28.761719-5.773437-39.246094-16.253906-10.484375-10.484375-16.257813-24.421875-16.257813-39.246094 0-14.824218 5.773438-28.761718 16.257813-39.246094 10.484375-10.484374 24.421875-16.257812 39.246094-16.257812s28.761719 5.773438 39.246093 16.257812c10.480469 10.484376 16.253907 24.421876 16.253907 39.246094 0 14.824219-5.773438 28.761719-16.253907 39.246094-10.484374 10.480469-24.421874 16.253906-39.246093 16.253906zm0-71c-4.140625 0-8.03125 1.609375-10.960938 4.539063-2.925781 2.929687-4.539062 6.820312-4.539062 10.960937s1.609375 8.03125 4.539062 10.957032c2.929688 2.929687 6.820313 4.542968 10.960938 4.542968s8.03125-1.613281 10.957031-4.539062c2.929688-2.929688 4.542969-6.820313 4.542969-10.960938s-1.613281-8.03125-4.542969-10.960937c-2.925781-2.929688-6.816406-4.539063-10.957031-4.539063zm64.5 225.976563c-16.644531 0-33.289063-6.335938-45.960938-19.007813-25.347656-25.34375-25.347656-66.585937 0-91.929687 25.34375-25.34375 66.582031-25.34375 91.925781 0s25.34375 66.585937 0 91.929687c-12.671874 12.671875-29.316406 19.007813-45.964843 19.007813zm0-89.960938c-6.402344 0-12.804688 2.4375-17.675781 7.308594-9.75 9.75-9.75 25.609375 0 35.359375 9.746093 9.746094 25.605468 9.746094 35.355468 0 9.746094-9.75 9.746094-25.609375 0-35.359375-4.875-4.871094-11.277344-7.308594-17.679687-7.308594zm-64 255.960938c-17.671875 0-35.339844-6.722657-48.792969-20.175781-26.902344-26.902344-26.902344-70.679688 0-97.582032 26.902344-26.90625 70.679688-26.90625 97.582031 0 26.90625 26.902344 26.90625 70.679688 0 97.582032-13.449219 13.453124-31.121093 20.175781-48.789062 20.175781zm0-97.957031c-7.425781 0-14.851563 2.828124-20.507813 8.480468-11.304687 11.308594-11.304687 29.707032 0 41.015625 11.308594 11.308594 29.707032 11.308594 41.015625 0 11.304688-11.308593 11.304688-29.707031 0-41.015625-5.65625-5.652344-13.082031-8.480468-20.507812-8.480468zm-290.511719 51.96875c-11.136719 0-22.277344-4.242188-30.757812-12.71875-16.960938-16.964844-16.960938-44.5625 0-61.523438 16.960937-16.960938 44.558593-16.960938 61.519531 0 16.960937 16.960938 16.960937 44.558594 0 61.519531-8.480469 8.480469-19.621094 12.722657-30.761719 12.722657zm117.503906 73.007812c-7.683594 0-15.363281-2.921875-21.210937-8.769531-11.699219-11.699219-11.699219-30.734375-.003907-42.429688l.003907-.003906c11.695312-11.695313 30.730469-11.695313 42.425781 0 11.699219 11.699219 11.699219 30.734375.003906 42.429687-5.851562 5.847657-13.535156 8.773438-21.21875 8.773438zm0 0"
            />
        </Svg>
    </View>
);

const ICON_MAPS: any = {
    'Folder': require('./Folder').default,
    'Music': require("./Music").default,
    'Close': require('./Close').default,
    'Play': require("./Play").default,
    'Pause': require("./Pause").default,
    'SkipForward': require("./SkipForward").default,
    'SkipBack': require("./SkipBack").default
}

export const Icon = ({name, size = 24, onPress}: Props) => {
    let IconComponent: any = null;
    try {
        IconComponent = ICON_MAPS[name];
    } catch (e) {
        console.log(e)
    }
    const theme: Theme = useTheme();
    const {
        colors: {text},
    } = theme;
    const color = Color(text);
    return (
        <Suspense fallback={<Loader size={size - 4} color={color.lighten(0.8)}/>}>
            <TouchableOpacity style={{height: size, width: size}} onPress={onPress}>
                {IconComponent ? <IconComponent color={color.fade(0.75).hex()}/> : false}
            </TouchableOpacity>
        </Suspense>
    );
};
