import * as $protobuf from "protobufjs";
/** Namespace n8jswebsynth. */
export namespace n8jswebsynth {

    /** DataType enum. */
    enum DataType {
        TIME = 0,
        FREQUENCY = 1
    }

    /** Properties of a TimeData. */
    interface ITimeData {

        /** TimeData sampleRate */
        sampleRate?: (number|null);

        /** TimeData data */
        data?: (number[]|null);
    }

    /** Represents a TimeData. */
    class TimeData implements ITimeData {

        /**
         * Constructs a new TimeData.
         * @param [properties] Properties to set
         */
        constructor(properties?: n8jswebsynth.ITimeData);

        /** TimeData sampleRate. */
        public sampleRate: number;

        /** TimeData data. */
        public data: number[];

        /**
         * Creates a new TimeData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimeData instance
         */
        public static create(properties?: n8jswebsynth.ITimeData): n8jswebsynth.TimeData;

        /**
         * Encodes the specified TimeData message. Does not implicitly {@link n8jswebsynth.TimeData.verify|verify} messages.
         * @param message TimeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: n8jswebsynth.ITimeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimeData message, length delimited. Does not implicitly {@link n8jswebsynth.TimeData.verify|verify} messages.
         * @param message TimeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: n8jswebsynth.ITimeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimeData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): n8jswebsynth.TimeData;

        /**
         * Decodes a TimeData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): n8jswebsynth.TimeData;

        /**
         * Verifies a TimeData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimeData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimeData
         */
        public static fromObject(object: { [k: string]: any }): n8jswebsynth.TimeData;

        /**
         * Creates a plain object from a TimeData message. Also converts values to other types if specified.
         * @param message TimeData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: n8jswebsynth.TimeData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimeData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FrequencyData. */
    interface IFrequencyData {

        /** FrequencyData real */
        real?: (number[]|null);

        /** FrequencyData imag */
        imag?: (number[]|null);
    }

    /** Represents a FrequencyData. */
    class FrequencyData implements IFrequencyData {

        /**
         * Constructs a new FrequencyData.
         * @param [properties] Properties to set
         */
        constructor(properties?: n8jswebsynth.IFrequencyData);

        /** FrequencyData real. */
        public real: number[];

        /** FrequencyData imag. */
        public imag: number[];

        /**
         * Creates a new FrequencyData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FrequencyData instance
         */
        public static create(properties?: n8jswebsynth.IFrequencyData): n8jswebsynth.FrequencyData;

        /**
         * Encodes the specified FrequencyData message. Does not implicitly {@link n8jswebsynth.FrequencyData.verify|verify} messages.
         * @param message FrequencyData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: n8jswebsynth.IFrequencyData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FrequencyData message, length delimited. Does not implicitly {@link n8jswebsynth.FrequencyData.verify|verify} messages.
         * @param message FrequencyData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: n8jswebsynth.IFrequencyData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FrequencyData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FrequencyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): n8jswebsynth.FrequencyData;

        /**
         * Decodes a FrequencyData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FrequencyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): n8jswebsynth.FrequencyData;

        /**
         * Verifies a FrequencyData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FrequencyData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FrequencyData
         */
        public static fromObject(object: { [k: string]: any }): n8jswebsynth.FrequencyData;

        /**
         * Creates a plain object from a FrequencyData message. Also converts values to other types if specified.
         * @param message FrequencyData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: n8jswebsynth.FrequencyData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FrequencyData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WavetableMessage. */
    interface IWavetableMessage {

        /** WavetableMessage name */
        name: string;

        /** WavetableMessage dataType */
        dataType: n8jswebsynth.DataType;

        /** WavetableMessage timeData */
        timeData?: (n8jswebsynth.ITimeData|null);

        /** WavetableMessage frequencyData */
        frequencyData?: (n8jswebsynth.IFrequencyData|null);
    }

    /** Represents a WavetableMessage. */
    class WavetableMessage implements IWavetableMessage {

        /**
         * Constructs a new WavetableMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: n8jswebsynth.IWavetableMessage);

        /** WavetableMessage name. */
        public name: string;

        /** WavetableMessage dataType. */
        public dataType: n8jswebsynth.DataType;

        /** WavetableMessage timeData. */
        public timeData?: (n8jswebsynth.ITimeData|null);

        /** WavetableMessage frequencyData. */
        public frequencyData?: (n8jswebsynth.IFrequencyData|null);

        /** WavetableMessage data. */
        public data?: ("timeData"|"frequencyData");

        /**
         * Creates a new WavetableMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WavetableMessage instance
         */
        public static create(properties?: n8jswebsynth.IWavetableMessage): n8jswebsynth.WavetableMessage;

        /**
         * Encodes the specified WavetableMessage message. Does not implicitly {@link n8jswebsynth.WavetableMessage.verify|verify} messages.
         * @param message WavetableMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: n8jswebsynth.IWavetableMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WavetableMessage message, length delimited. Does not implicitly {@link n8jswebsynth.WavetableMessage.verify|verify} messages.
         * @param message WavetableMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: n8jswebsynth.IWavetableMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WavetableMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WavetableMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): n8jswebsynth.WavetableMessage;

        /**
         * Decodes a WavetableMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WavetableMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): n8jswebsynth.WavetableMessage;

        /**
         * Verifies a WavetableMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WavetableMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WavetableMessage
         */
        public static fromObject(object: { [k: string]: any }): n8jswebsynth.WavetableMessage;

        /**
         * Creates a plain object from a WavetableMessage message. Also converts values to other types if specified.
         * @param message WavetableMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: n8jswebsynth.WavetableMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WavetableMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
