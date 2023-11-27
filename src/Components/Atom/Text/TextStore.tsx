export enum TextStyle {
  TEXT_R_40 = "TEXT_R_40",
  TEXT_R_40_BLUE = "TEXT_R_40_BLUE",
  TEXT_E_32 = "TEXT_E_32",
  TEXT_S_32_BLUE = "TEXT_S_32_BLUE",
  TEXT_R_30 = "TEXT_R_30",
  TEXT_S_30_BLUE = "TEXT_S_30_BLUE",
  TEXT_R_24 = "TEXT_R_24",
  TEXT_M_24 = "TEXT_M_24",
  TEXT_R_20 = "TEXT_R_20",
  TEXT_R_20_BLUE = "TEXT_R_20_BLUE",
  TEXT_S_16 = "TEXT_S_16",
  TEXT_R_16 = "TEXT_R_16",
  TEXT_R_15 = "TEXT_R_15",
  TEXT_R_11 = "TEXT_R_11",
  TEXT_S_10 = "TEXT_S_10",
}

interface Props {
  textStyle: TextStyle;
  children: React.ReactNode;
  style?: string;
}
export default function TextStore({ textStyle, children, style }: Props) {
  const selectText = (): React.ReactNode => {
    switch (textStyle) {
      case TextStyle.TEXT_R_40:
        return (
          <p className={`text-custom_40 leading-[40px] font-normal ${style}`}>
            {children}
          </p>
        );
      case TextStyle.TEXT_R_40_BLUE:
        return (
          <p
            className={`text-custom_40 font-normal leading-[40px] text-custom_navy ${style}`}
          >
            {children}
          </p>
        );
      case TextStyle.TEXT_E_32:
        return (
          <p
            className={`text-custom_32 font-extrabold leading-[32px] ${style}`}
          >
            {children}
          </p>
        );
      case TextStyle.TEXT_S_32_BLUE:
        return (
          <p
            className={`text-custom_32 text-custom_navy font-semibold ${style}`}
          >
            {children}
          </p>
        );
      case TextStyle.TEXT_R_30:
        return (
          <p className={`text-custom_30 font-normal ${style}`}>{children}</p>
        );
      case TextStyle.TEXT_S_30_BLUE:
        return (
          <p
            className={`text-custom_30 text-custom_navy font-semibold ${style}`}
          >
            {children}
          </p>
        );
      case TextStyle.TEXT_R_24:
        return (
          <p className={`text-custom_24 leading-[24px] font-normal ${style}`}>
            {children}
          </p>
        );
      case TextStyle.TEXT_M_24:
        return (
          <p className={`text-custom_24 leading-[29px] font-semibold ${style}`}>
            {children}
          </p>
        );
      case TextStyle.TEXT_R_20:
        return (
          <p className={`text-custom_20 font-normal leading-[20px] ${style}`}>
            {children}
          </p>
        );
      case TextStyle.TEXT_R_20_BLUE:
        return (
          <p className={`text-custom_20 font-normal text-custom_navy ${style}`}>
            {children}
          </p>
        );
      case TextStyle.TEXT_R_16:
        return (
          <p className={`text-custom_16 font-normal ${style}`}>{children}</p>
        );
      case TextStyle.TEXT_S_16:
        return (
          <p className={`text-custom_16 font-semibold ${style}`}>{children}</p>
        );
      case TextStyle.TEXT_R_15:
        return (
          <p className={`text-custom_15 font-normal ${style}`}>{children}</p>
        );
      case TextStyle.TEXT_R_11:
        return (
          <p className={`text-custom_11 font-normal ${style}`}>{children}</p>
        );
      case TextStyle.TEXT_S_10:
        return (
          <p className={`text-custom_10 font-semibold ${style}`}>{children}</p>
        );
    }
  };
  return <>{SelectText()}</>;
}

