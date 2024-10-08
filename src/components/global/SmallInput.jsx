import styles from "../../styles/global/inputSmall.module.css"

import PropTypes from "prop-types"

export default function InputSmall({
  isRenderAsteric= true,
  labelClassname= "",
  title= "title",
  ...props
}){
  return(
    <label className={`${styles.labels} ${labelClassname}`}>
      {title} {isRenderAsteric ? <span className={styles.asteric}>*</span> : ""}
      <input 
      type="text"
      className={styles.inputs}
      {...props}/>
    </label>
    )
}

InputSmall.propTypes = {
  isRenderAsteric: PropTypes.bool,
  labelClassname: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string
}