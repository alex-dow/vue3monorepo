<template>

<button>{{ variant }} - test</button>

</template>

<script lang="ts">

import { defineComponent, PropType } from 'vue';

type Variant = 'primary' | 'secondary' | 'error';

export default defineComponent({
    props: {
        variant: {
            required: true,
            type: String as PropType<Variant>
        }
    }
});

</script>
