import streamlit as st

# Configuración de la página web
st.set_page_config(page_title="ArrendaIA", page_icon="⚖️")

# Advertencia legal obligatoria del curso
st.warning("⚠️ **ADVERTENCIA:** Esta herramienta es un ejercicio académico del proyecto ArrendaIA (Pontificia Universidad Javeriana) que no constituye asesoría legal ni sustituye la consulta con un abogado.")

# Título y lema
st.title("⚖️ ArrendaIA")
st.subheader("Tu asistente inteligente para el arrendamiento de vivienda urbana en Colombia")
st.write("Consulta sobre incrementos de canon, causales de terminación y plazos de preaviso según la Ley 820 de 2003.")

st.divider()

# Formulario de entrada de usuario
consulta = st.text_area("Escribe tu consulta o situación de arrendamiento aquí:", height=150, placeholder="Ejemplo: Llevo 1 año en el apartamento y el dueño me quiere subir el arriendo de $1.500.000 un 15%. ¿Es legal?")

if st.button("Consultar asistente"):
    if consulta.strip() == "":
        st.error("Por favor escribe una consulta antes de enviar.")
    else:
        st.info("Procesando consulta jurídica...")
        # Aquí conectaremos la respuesta del modelo en los siguientes pasos
        st.success("Respuesta de ArrendaIA (modo demostración activo):")
        st.write("Según el Artículo 20 de la Ley 820 de 2003, el incremento del canon de arrendamiento no puede superar el 100% del IPC del año anterior (para el 2026 es el 5.12%). El valor máximo de incremento permitido es de $76.800.")