export enum IconStyle {
  CONTENTS = "CONTENTS",
  COMMENTS = "COMMENTS",
  DEFAULT_BUTTON = "DEFAULT_BUTTON",
}

interface Props {
  iconStyle: IconStyle;
  design?: string;
  children?: React.ReactNode
}

export default function IconStore({ iconStyle, design, children }: Props) {
  const selectIcon = (): React.ReactNode => {
    switch (iconStyle) {
      case IconStyle.CONTENTS:
        return <p className={`p-2 ${design}`}>Content Icon</p>
      case IconStyle.COMMENTS:
        return <p>Comment Icon</p>

      case IconStyle.DEFAULT_BUTTON:
        return (
          <button type="button" className={`bg-yellow ${design}`}>
            {children}
          </button>
        )
      default:
        return null;
    }
  }

  return (
    <>
      {
        selectIcon()
      }

      <IconStore iconStyle={IconStyle.DEFAULT_BUTTON} design="p-3">
        황동준 바보
      </IconStore>
    </>
  )
}