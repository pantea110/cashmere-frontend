import {
  Footer,
  Navbar,
  Manage,
  Polls,
  UpperPage,
  Statistics,
  Gauge,
} from "components";
import styles from "./DAO.module.scss";
import { Container, Layout } from "ui";
import { useTitle } from "hooks/useTitle";
import { useModal } from "hooks";

const DAO = () => {
  useTitle("DAO");

  const trialModal = useModal();
  return (
    <Layout>
      <Navbar />

      <div className={styles.wrapper}>
        <Container compact>
          <UpperPage />
          <div className={styles.layer}>
            <Statistics />
            <div className={styles.space}></div>
            <Gauge />
          </div>
          <Polls />
        </Container>
      </div>

      <Footer />
    </Layout>
  );
};

export { DAO };
