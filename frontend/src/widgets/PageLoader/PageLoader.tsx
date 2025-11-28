import cls from "./PageLoader.module.scss";
import { classNames } from "../../shared/lib/classNames/classNames";
interface PageLoaderProps {
  className?: string;
}
//связанный с загрузкой страницы и я сделал лоадер отдельно в папке shared/lOader
const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>....</div>
  );
};

export default PageLoader;
